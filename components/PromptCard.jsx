"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { EditOutlined, DeleteOutlined, CopyOutlined } from "@ant-design/icons";
import { Avatar, Card } from "antd";
const { Meta } = Card;

const PromptCard = ({ post, handleEdit, handleDelete, handleTagClick }) => {
  const { data: session } = useSession();
  const pathName = usePathname();
  const router = useRouter();

  // const [copied, setCopied] = useState("");
  const [displayButtons, setDisplayButtons] = useState(false);

  const handleProfileClick = () => {
    console.log(post);

    if (post.creator._id === session?.user.id) return router.push("/profile");

    router.push(`/profile/${post.creator._id}?name=${post.creator.username}`);
  };

  // const handleCopy = () => {
  //   console.log("handleCopy");
  //   setCopied(post.prompt);
  //   navigator.clipboard.writeText(post.prompt);
  //   setTimeout(() => setCopied(false), 3000);
  // };

  useEffect(() => {
    if (pathName === "/profile") {
      setDisplayButtons(true);
    }
  }, []);

  return (
    <Card
      style={
        {
          // width: 300,
        }
      }
      actions={[
        <EditOutlined
          style={!displayButtons ? { display: "none" } : {}}
          onClick={handleEdit}
        ></EditOutlined>,
        <DeleteOutlined
          style={!displayButtons ? { display: "none" } : {}}
          onClick={handleDelete}
        ></DeleteOutlined>,
      ]}
    >
      {/* <CopyOutlined onClick={handleCopy}></CopyOutlined>, */}
      <Meta
        avatar={<Avatar size="large" src={post.creator.image}></Avatar>}
        title={post.creator.username}
        description={post.creator.email}
        onClick={handleProfileClick}
      />
      <p className="my-4 font-satoshi text-sm text-gray-700">{post.prompt}</p>
      <p
        className="font-inter text-sm blue_gradient cursor-pointer"
        onClick={() => handleTagClick && handleTagClick(post.tag)}
      >
        {post.tag}
      </p>
    </Card>
  );
};

export default PromptCard;

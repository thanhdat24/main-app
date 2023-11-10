import React from "react";

type Props = {
  params: {
    id: string;
  };
};

function BlogDetail({ params }: Props) {

  return <div>{params.id}</div>;
}




export default BlogDetail;

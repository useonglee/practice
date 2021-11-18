import React, { useState, useEffect } from "react";
import axios from "axios";

import { Container, Title, Body, TitleWrapper, BodyWrapper } from "./style";
import { ItemType } from "./type";

const Item = (): JSX.Element => {
  const [post, setPost] = useState<ItemType>({
    body: "",
    id: 0,
    title: "",
    userId: 0,
  });

  useEffect(() => {
    const postData = axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => setPost(res.data));

    console.log(postData);
  }, []);

  return (
    <Container>
      <TitleWrapper>
        <Title>{post.title}</Title>
      </TitleWrapper>
      <BodyWrapper>
        <Body>{post.body}</Body>
      </BodyWrapper>
    </Container>
  );
};

export default Item;

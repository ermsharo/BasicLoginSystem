import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const BoardBox = styled.div`
  padding-top: 32px;
`;

export default function Board() {
  const [selectedWord, setSelectedWord] = useState(null);
  const [wordsRequests, setWordsRequests] = useState({});
  const [infoDrawerOpen, setInfoDrawerOpen] = useState(false);

  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();

    if (0 < windowSize.width && windowSize.width < 992) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }

    return () => window.removeEventListener("resize", handleResize);
  }, [windowSize.width]);

  let { tab } = useParams();

  return (
    <>
      <BoardBox>produtos vem aqui</BoardBox>
    </>
  );
}

// Init
import React from "react";
import teamImg from "../assets/team.gif";
import styled from "styled-components";

const Text = styled.p`
  border-right: solid 3px rgba(0, 255, 0, 0.75);
  white-space: nowrap;
  overflow: hidden;
  font-family: "Source Code Pro", monospace;
  font-size: 28px;
  color: black;
  margin: 0 auto;
  animation: animated-text 10s steps(29, end) 1s 1 normal both,
    animated-cursor 600ms steps(29, end) infinite;
  animation-iteration-count: infinite;
  /* text animation */

  @keyframes animated-text {
    from {
      width: 0;
    }
    to {
      width: 472px;
    }
  }

  /* cursor animations */

  @keyframes animated-cursor {
    from {
      border-right-color: rgba(0, 255, 0, 0.75);
    }
    to {
      border-right-color: transparent;
    }
  }
`;

export default function Header() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={teamImg} alt="Website is launching soon." />
      <Text>Hi! We are Coming soon ...</Text>
    </div>
  );
}

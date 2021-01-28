import React from 'react';
import styled from 'styled-components';

const CenteredDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height:100vh;  
    background-image: url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8ae1c281-ed89-448d-871b-a2e351a6ba6f/d3l1qoj-f1b1c676-9602-4c65-bd7d-ea518fbc8b88.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvOGFlMWMyODEtZWQ4OS00NDhkLTg3MWItYTJlMzUxYTZiYTZmXC9kM2wxcW9qLWYxYjFjNjc2LTk2MDItNGM2NS1iZDdkLWVhNTE4ZmJjOGI4OC5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.QNzMMfe4aolg5Nm8e0kEQycsjnCMejBHmgwYWhvNxTw");
    flex-direction: column;
`;

export default function fim() {
  return (
    <CenteredDiv>
    <h1> Fim! você acertou ... </h1>
    </CenteredDiv>
  );
}

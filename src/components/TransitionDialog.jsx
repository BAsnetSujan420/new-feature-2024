import React, { useRef } from 'react';
import styled from 'styled-components';

const Dialog = styled.dialog`
  border-radius: 10px;
  padding: 0;
  width: clamp(25ch, 60ch, 80vw);
  border: 1px solid;

  opacity: 0;
  transform: translateY(10px);

  transition:
    opacity 0.3s ease,
    transform 0.3s ease;

  &[open] {
    opacity: 1;
    transform: translateY(0);
  }

  @starting-style {
    &[open] {
      opacity: 0;
      transform: translateY(10px);
    }

    &[open]::backdrop {
      opacity: 0;
    }
  }

  &::backdrop {
    background: black;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &[open]::backdrop {
    opacity: 0.8;
  }
`;
const Header = styled.header`
  padding: 0.75rem 1rem;
  font-weight: bold;
  font-size: 1.25rem;
  background: CanvasText;
  color: Canvas;
`;

const Form = styled.form`
  padding: 1.25rem 1rem 1rem;

  p {
    margin: 0;
    line-height: 1.5;
  }
`;

const Footer = styled.footer`
  display: flex;
  justify-content: flex-end;
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid #aaa3;
`;

const Button = styled.button`
  padding: 8px 14px;
  border-radius: 5px;
  border: 1px solid #eee;
  background: white;
  color: #222;
  cursor: pointer;
`;

const OpenButton = styled.button`
  padding: 10px 16px;
  border-radius: 6px;
  border: none;
  background: hsl(200 5% 15%);
  color: #fff;
  cursor: pointer;
`;

export default function TransitionDialog() {
  const ref = useRef(null);

  return (
    <div id="center">
      <OpenButton onClick={() => ref.current?.showModal()}>
        Open Dialog
      </OpenButton>

      <Dialog ref={ref}>
        <Header>➥ I'm animated!</Header>

        <Form method="dialog">
          <p>I don't use any keyframes either, I'm all CSS transitions.</p>

          <Footer>
            <Button type="submit">Rad</Button>
          </Footer>
        </Form>
      </Dialog>
    </div>
  );
}

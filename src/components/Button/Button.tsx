import React from "react";
import styled, { css } from "styled-components";

export interface ButtonProps extends Omit<
  React.ComponentPropsWithoutRef<"button">,
  "label" | "variant" | "size"
> {
  label?: string;
  variant?: "Primary" | "Secondary";
  size?: "Small" | "Large";
}

const StyledRoot = styled.button<{
  $size: "Small" | "Large";
  $variant: "Primary" | "Secondary";
}>(
  ({ theme, $size, $variant }) => css`
    appearance: none;
    margin: 0;
    padding: 0;
    border: 0;
    background: transparent;
    font: inherit;
    color: inherit;
    cursor: pointer;
    &:focus-visible {
      outline: 2px solid Highlight;
      outline-color: AccentColor;
      outline-offset: 2px;
    }
    &:disabled {
      cursor: not-allowed;
    }
    border: 1px solid transparent;
    box-sizing: border-box;
    border-radius: 8px;
    ${(() => {
      switch ($size) {
        case "Small":
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 4px;
            padding-right: 12px;
            padding-bottom: 4px;
            padding-left: 12px;
            gap: 8px;
            justify-content: center;
            align-items: center;
            width: fit-content;
          `;
        case "Large":
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 12px;
            padding-right: 24px;
            padding-bottom: 12px;
            padding-left: 24px;
            gap: 8px;
            justify-content: center;
            align-items: center;
            width: fit-content;
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($variant) {
        case "Primary":
          return css`
            background-color: ${theme["brand"]["primary"]};
          `;
        case "Secondary":
          return css`
            background-color: ${theme["surface"]["default"]};
          `;
        default:
          return css``;
      }
    })()}
  ${(() => {
      switch ($variant) {
        case "Secondary":
          return css`
            border-color: ${theme["border"]["default"]};
          `;
        default:
          return css``;
      }
    })()}
  ${(() => {
      switch ($variant) {
        case "Primary":
          return css`
            color: ${theme["text"]["on-brand"]};
          `;
        case "Secondary":
          return css`
            color: ${theme["text"]["primary"]};
          `;
        default:
          return css``;
      }
    })()}
  &:hover:not(:disabled) {
      ${(() => {
        switch ($variant) {
          case "Primary":
            return css`
              background-color: ${theme["brand"]["primary-hover"]};
            `;
          case "Secondary":
            return css`
              background-color: ${theme["surface"]["subtle"]};
            `;
          default:
            return css``;
        }
      })()}
    }
    &:disabled {
      ${(() => {
        switch ($variant) {
          case "Primary":
            return css`
              background-color: ${theme["surface"]["subtle"]};
            `;
          case "Secondary":
            return css`
              background-color: ${theme["surface"]["default"]};
            `;
          default:
            return css``;
        }
      })()}
    }
  `,
);

const StyledLabel = styled.div<{
  $variant: "Primary" | "Secondary";
  $size: "Small" | "Large";
}>(
  ({ theme, $variant, $size }) => css`
    ${(() => {
      switch ($variant) {
        case "Primary":
          return css`
            color: ${theme["text"]["on-brand"]};
          `;
        case "Secondary":
          return css`
            color: ${theme["text"]["primary"]};
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($size) {
        case "Small":
          return css`
            font-family: var(--font-inter, "Inter"), sans-serif;
            font-size: 12px;
            font-weight: 500;
            line-height: 16px;
          `;
        case "Large":
          return css`
            font-family: var(--font-inter, "Inter"), sans-serif;
            font-size: 14px;
            font-weight: 500;
            line-height: 20px;
          `;
        default:
          return css``;
      }
    })()}
  &:is(button:disabled *) {
      ${css`
        color: ${theme["text"]["disabled"]};
      `}
    }
  `,
);

/** Action button. Variant picks the emphasis, Size the density, State the interaction state. Set the label through the Label text property. */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    { label = "Button", variant = "Primary", size = "Small", ...rest },
    ref,
  ) {
    return (
      <StyledRoot
        type="button"
        {...rest}
        ref={ref}
        $size={size}
        $variant={variant}
      >
        <StyledLabel $variant={variant} $size={size}>
          {label}
        </StyledLabel>
      </StyledRoot>
    );
  },
);

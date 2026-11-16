import React from "react";
import styled, { css } from "styled-components";

export interface TagProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "label" | "type"
> {
  label?: string;
  type?: "Neutral" | "Success";
}

const StyledRoot = styled.div<{ $type: "Neutral" | "Success" }>(
  ({ theme, $type }) => css`
    display: flex;
    flex-direction: row;
    padding-top: 4px;
    padding-right: 8px;
    padding-bottom: 4px;
    padding-left: 8px;
    gap: 0px;
    justify-content: center;
    align-items: center;
    width: fit-content;
    border-radius: 999px;
    ${(() => {
      switch ($type) {
        case "Neutral":
          return css`
            background-color: ${theme["status"]["neutral-bg"]};
          `;
        case "Success":
          return css`
            background-color: ${theme["status"]["success-bg"]};
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($type) {
        case "Neutral":
          return css`
            color: ${theme["status"]["neutral-text"]};
          `;
        case "Success":
          return css`
            color: ${theme["status"]["success-text"]};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledLabel = styled.div<{ $type: "Neutral" | "Success" }>(
  ({ theme, $type }) => css`
    ${(() => {
      switch ($type) {
        case "Neutral":
          return css`
            color: ${theme["status"]["neutral-text"]};
          `;
        case "Success":
          return css`
            color: ${theme["status"]["success-text"]};
          `;
        default:
          return css``;
      }
    })()}
    font-family: var(--font-inter, 'Inter'), sans-serif;
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
  `,
);

/** Small status label. Type picks the colour, the label is set through the Label text property. */
export const Tag = React.forwardRef<HTMLDivElement, TagProps>(function Tag(
  { label = "Tag", type = "Neutral", ...rest },
  ref,
) {
  return (
    <StyledRoot {...rest} ref={ref} $type={type}>
      <StyledLabel $type={type}>{label}</StyledLabel>
    </StyledRoot>
  );
});

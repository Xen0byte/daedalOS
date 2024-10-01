import styled from "styled-components";

const StyledColumns = styled.span`
  background-color: rgb(32, 32, 32);
  display: block;
  margin-right: ${({ theme }) => theme.sizes.fileManager.detailsStartPadding}px;
  position: sticky;
  top: 0;
  width: fit-content;
  z-index: 1;

  ol {
    display: flex;
    height: ${({ theme }) => theme.sizes.fileManager.columnHeight};

    li {
      color: rgb(222, 222, 222);
      display: flex;
      font-size: 12px;
      padding-left: 6px;
      place-items: center;
      position: relative;
      top: -1px;

      > svg {
        fill: rgb(222, 222, 222);
        left: calc(50% - 4px);
        position: absolute;
        top: 1px;
        transition: none !important;
        width: 7px;
      }

      .name {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .resize {
        border-left: 1px solid rgb(99, 99, 99);
        cursor: col-resize;
        height: 25px;
        padding-left: ${({ theme }) =>
          theme.sizes.fileManager.columnResizeWidth}px;
        position: absolute;
        right: -${({ theme }) => theme.sizes.fileManager.columnResizeWidth}px;
        z-index: 1;
      }

      &:hover {
        background-color: rgb(67, 67, 67);

        .resize {
          border-left: none;
        }
      }

      &:active {
        background-color: rgb(131, 131, 131);
      }

      &:first-child {
        padding-left: 17px;
      }
    }
  }
`;

export default StyledColumns;
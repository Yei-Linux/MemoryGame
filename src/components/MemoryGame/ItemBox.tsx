import classNames from "classnames";
import React from "react";
import { TValidateMemoizedPath } from "../../hooks/useGame";
import { IBoxTable } from "../../types/table";
import Box from "../ui/layouts/Box";
import { Helper } from "./helper";
import styles from "./style.css";

export interface IItemBox {
  boxItem: IBoxTable;
  validateMemoizedPath: TValidateMemoizedPath;
  pathLevel: IBoxTable[];
  currentBoxLight: IBoxTable | null;
  index: number;
}

const { validateItemBoxes } = Helper;

const ItemBox = ({
  boxItem,
  validateMemoizedPath,
  index,
  currentBoxLight,
  pathLevel,
}: IItemBox) => {
  const cx = classNames.bind(styles);
  const isActiveBoxItem = validateItemBoxes(boxItem, currentBoxLight);

  return (
    <Box
      className={classNames(
        cx("memorygame__box", {
          "memorygame__box--primary": !isActiveBoxItem,
          "memorygame__box--active": isActiveBoxItem,
        })
      )}
      onClick={validateMemoizedPath.bind(this, boxItem, pathLevel)}
      key={index}
      minWidth="50px"
      minHeight="50px"
      css={boxItem}
    >
      {index}
    </Box>
  );
};

export default ItemBox;

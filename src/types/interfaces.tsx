type TTag = keyof JSX.IntrinsicElements;

type TSpacer = 0 | 1 | 2 | 3 | 5;
type TWeight = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 

type TDesignTokens = {
  padding?: TSpacer;
  margin?: TSpacer;
  border?: TSpacer;
  weight?: TWeight
};

type TGlobalProps<asType = TTag> = {
  as?: asType;
  css?: React.CSSProperties;
  className?: string;
};

export type TStyles<asType = TTag> = TGlobalProps<asType> & TDesignTokens;

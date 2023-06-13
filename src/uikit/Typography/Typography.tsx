import { lineHeight } from '@mui/system';
import React, {ReactNode} from 'react';

interface TypographyProps {
  tag: 'h1' | 'h2' | 'h3';
  fontSize: string;
  children:ReactNode | string
  color: string;
  lineHeight:string;
  fontWeight:number ;
}

const Typography: React.FC<TypographyProps> = ({ tag, fontSize, children,color,lineHeight,fontWeight}) => {
  const typographyStyle: React.CSSProperties = {
    fontSize:fontSize,
    fontFamily: "Inter",
    color:color,
    lineHeight:lineHeight,
    fontWeight:fontWeight,
    margin:"0px"
  };

  const TagComponent = tag;

  return <TagComponent style={typographyStyle}>{children}</TagComponent>;
};

export default Typography;

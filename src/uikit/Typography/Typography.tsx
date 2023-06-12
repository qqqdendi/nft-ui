import { lineHeight } from '@mui/system';
import React, {ReactNode} from 'react';

interface TypographyProps {
  tag: 'h1' | 'h2' | 'h3';
  fontSize: string;
  children:ReactNode | string
  fontType: string;
  color: string;
  lineHeight:string;
}

const Typography: React.FC<TypographyProps> = ({ tag, fontSize, fontType, children,color,lineHeight}) => {
  const typographyStyle: React.CSSProperties = {
    fontSize:fontSize,
    fontFamily: fontType,
    color:color,
    lineHeight:lineHeight,
    fontWeight:400,
  };

  const TagComponent = tag;

  return <TagComponent style={typographyStyle}>{children}</TagComponent>;
};

export default Typography;

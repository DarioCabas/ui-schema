import React from 'react';
import IcBold from '@mui/icons-material/FormatBold';
import IcItalic from '@mui/icons-material/FormatItalic';
import IcUnderlined from '@mui/icons-material/FormatUnderlined';
import IcStrikethrough from '@mui/icons-material/FormatStrikethrough';
import IcCode from '@mui/icons-material/Code';
import { useSlate } from 'slate-react';
import makeStyles from "@mui/styles/makeStyles";
import { MARK_BOLD, MARK_ITALIC, MARK_UNDERLINE, MARK_STRIKETHROUGH, MARK_CODE, MARK_SUPERSCRIPT, MARK_SUBSCRIPT, PortalBody, useBalloonShow, useBalloonMove } from '@udecode/slate-plugins';
import { IcSuperscript } from '@ui-schema/material-slate/Icons/IcSuperscript';
import { IcSubscript } from '@ui-schema/material-slate/Icons/IcSubscript';
import { ToolbarMark } from '@ui-schema/material-slate/Slate/SlateToolbarButtons';
import { editorIsEnabled } from '@ui-schema/material-slate/Slate/editorIsEnabled';
const useStyles = makeStyles(theme => ({
  wrapper: {
    position: 'absolute',
    zIndex: 500,
    background: theme.palette.background.paper,
    whiteSpace: 'nowrap',
    display: ({
      hidden
    }) => hidden ? 'none' : 'flex',
    border: '1px solid ' + theme.palette.divider,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1),
    marginTop: ({
      direction
    }) => direction === 'top' ? -9 : 9,
    transition: ({
      hiddenDelay
    }) => hiddenDelay ? '' : 'top 75ms ease-out,left 75ms ease-out',
    boxShadow: theme.shadows[3],
    '&:before': {
      left: '50%',
      content: '" "',
      position: 'absolute',
      transform: 'translateX(-50%)',
      borderColor: theme.palette.divider + ' transparent',
      borderStyle: 'solid',
      top: ({
        direction
      }) => direction === 'top' ? '100%' : 'auto',
      bottom: ({
        direction
      }) => direction === 'top' ? 'auto' : '100%',
      borderWidth: ({
        direction
      }) => direction === 'top' ? '9px 9px 0px' : '0px 8px 8px'
    },
    '&:after': {
      left: '50%',
      content: '" "',
      position: 'absolute',
      marginTop: '-1px',
      transform: 'translateX(-50%)',
      borderColor: theme.palette.divider + ' transparent',
      borderStyle: 'solid',
      top: ({
        direction
      }) => direction === 'top' ? '100%' : 'auto',
      bottom: ({
        direction
      }) => direction === 'top' ? 'auto' : '100%',
      borderWidth: ({
        direction
      }) => direction === 'top' ? '8px 8px 0px' : '0px 8px 8px'
    }
  }
}));
export const SlateToolbarBalloon = ({
  direction = 'top',
  hiddenDelay = 0,
  enableOnly
}) => {
  const ref = React.useRef(null);
  const editor = useSlate();
  const [hidden] = useBalloonShow({
    editor,
    ref,
    hiddenDelay
  });
  const classes = useStyles({
    hidden,
    hiddenDelay,
    direction
  });
  useBalloonMove({
    editor,
    ref,
    direction
  });
  return React.createElement(PortalBody, null, React.createElement("div", {
    className: classes.wrapper,
    ref: ref
  }, editorIsEnabled(enableOnly, MARK_BOLD) && React.createElement(ToolbarMark, {
    type: MARK_BOLD,
    icon: React.createElement(IcBold, null)
  }), editorIsEnabled(enableOnly, MARK_ITALIC) && React.createElement(ToolbarMark, {
    type: MARK_ITALIC,
    icon: React.createElement(IcItalic, null)
  }), editorIsEnabled(enableOnly, MARK_UNDERLINE) && React.createElement(ToolbarMark, {
    type: MARK_UNDERLINE,
    icon: React.createElement(IcUnderlined, null)
  }), editorIsEnabled(enableOnly, MARK_STRIKETHROUGH) && React.createElement(ToolbarMark, {
    type: MARK_STRIKETHROUGH,
    icon: React.createElement(IcStrikethrough, null)
  }), editorIsEnabled(enableOnly, MARK_CODE) && React.createElement(ToolbarMark, {
    type: MARK_CODE,
    icon: React.createElement(IcCode, null)
  }), editorIsEnabled(enableOnly, MARK_SUPERSCRIPT) && React.createElement(ToolbarMark, {
    type: MARK_SUPERSCRIPT,
    clear: MARK_SUBSCRIPT,
    icon: React.createElement(IcSuperscript, null)
  }), editorIsEnabled(enableOnly, MARK_SUBSCRIPT) && React.createElement(ToolbarMark, {
    type: MARK_SUBSCRIPT,
    clear: MARK_SUPERSCRIPT,
    icon: React.createElement(IcSubscript, null)
  })));
};
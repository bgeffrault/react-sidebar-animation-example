import React from "react";
import { forwardRef } from "react";

const FullWidthSidebar = forwardRef(({ children, style, className }, ref) => {
  return (
    <div
      style={{
        ...style,
        height: "100%",
        width: "100%",
        position: "absolute",
        boxSizing: "border-box",
      }}
      ref={ref}
      className={className}
    >
      {children}
    </div>
  );
});

export const SidebarContainer = forwardRef(
  (
    {
      width = 200,
      leftSide,
      fullWidth,
      style,
      children,
      open,
      className,
      animatedDivClassName,
    },
    ref
  ) => {
    if (fullWidth) {
      return (
        <FullWidthSidebar style={style} ref={ref} className={className}>
          {children}
        </FullWidthSidebar>
      );
    }

    const sx = {
      position: "absolute",
      top: 0,
      bottom: 0,
      width: fullWidth ? "100%" : width,
      boxSizing: "border-box",
    };
    leftSide ? (sx.right = 0) : (sx.left = 0);

    const {
      zIndex,
      //   border,
      //   borderColor,
      //   borderLeft,
      //   borderRight,
      //   boxShadow,
      //   margin,
      //   marginRight,
      //   marginLeft,
      //   borderStyle,
      ...rest
    } = style ?? {};
    console.log("open", open);
    return (
      <div
        style={{
          height: "100%",
          width,
          position: "relative",
          //   backgroundColor: rest.backgroundColor ?? "unset",
          zIndex: zIndex ?? 1,
          //   border: border ?? "initial",
          //   borderLeft: borderLeft ?? "initial",
          //   borderRight: borderRight ?? "initial",
          //   borderColor: borderColor ?? "unset",
          //   borderStyle: open ? borderStyle ?? "none" : "none",
          //   boxShadow: open ? boxShadow ?? "none" : "none",
          //   margin: open ? margin ?? 0 : 0,
          //   marginRight: open ? margin ?? 0 : 0,
          //   marginLeft: open ? margin ?? 0 : 0,
          flexShrink: 0,
        }}
        ref={ref}
        className={animatedDivClassName}
      >
        <div style={{ ...rest, ...sx }} className={className}>
          {children}
        </div>
      </div>
    );
  }
);

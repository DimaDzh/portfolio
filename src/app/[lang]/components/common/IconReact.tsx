import getIconComponent from "@/[lang]/utils/getReactIcon";
import React from "react";

const Icon = ({ iconName }: { iconName: string }) => {
  const IconComponent = getIconComponent(iconName);

  if (!IconComponent) return null;

  return <IconComponent />;
};

export default Icon;

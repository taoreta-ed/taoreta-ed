import React from "react";

function IconWithTooltip({ IconComponent, title, size = 25}) {
    if(!IconComponent) {
        console.error("IconComponent is not defined or unvalid");
        return null;
    }

    return(
        <div className="relative group">
            <IconComponent size={size} aria-label={title}/>
            <span className="absolute bottom-[-25px] left-1/2 transform -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform bg-zinc-700 text-white text-xs rounded px-2 py-1">{title}</span>
        </div>
    );

};

export default IconWithTooltip;
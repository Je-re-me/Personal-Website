const StarBorder = ({
  as: Component = 'button',
  className = '',
  color = 'white',
  speed = '7s',
  thickness = 2,
  children,
  ...rest
}) => {
  return (
    <Component
      className={`relative inline-block overflow-hidden rounded-[16px] ${className}`}
      style={{
        padding: `${thickness}px 0`,
        ...rest.style
      }}
      {...rest}>
      <div
        className="absolute w-[300%] h-[50%] opacity-80 bottom-[-11px] right-[-250%] rounded-full animate-star-movement-bottom z-0"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 20%)`,
          animationDuration: speed
        }}></div>
      <div
        className="absolute w-[300%] h-[50%] opacity-80 top-[-10px] left-[-250%] rounded-full animate-star-movement-top z-0"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 20%)`,
          animationDuration: speed
        }}></div>
      <div
        className="relative z-1 bg-gradient-to-b from-black to-gray-900 border-2 border-blue-950 text-white text-center text-[16px] p-[12px] rounded-[16px]">
        {children}
      </div>
    </Component>
  );
};

export default StarBorder;

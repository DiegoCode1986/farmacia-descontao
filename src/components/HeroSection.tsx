export const HeroSection = () => {
  return (
    <section className="relative w-full h-[430px] md:h-[550px] overflow-hidden">
      {/* Background Image - Mobile */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center md:hidden"
        style={{
          backgroundImage: "url('/imagens/banner_mobile.PNG')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Background Image - Desktop */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center hidden md:block"
        style={{
          backgroundImage: "url('/imagens/baner3.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
    </section>
  );
};

interface CategoryBannerProps {
  title: string;
  subtitle?: string;
  image: string;
  discount?: string;
  href?: string;
}

export const CategoryBanner = ({
  title,
  subtitle,
  image,
  discount,
  href = "#",
}: CategoryBannerProps) => {
  return (
    <a
      href={href}
      className="block relative overflow-hidden rounded-lg group hover:shadow-xl transition-all duration-300"
    >
      <div className="relative h-48 bg-gradient-to-br from-primary/10 to-secondary/10">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
        
        {discount && (
          <div className="absolute top-4 right-4">
            <span className="bg-primary text-primary-foreground px-3 py-1.5 rounded-full text-sm font-bold">
              {discount}
            </span>
          </div>
        )}
        
        <div className="absolute bottom-4 left-4 right-4 text-background">
          <h3 className="text-xl font-bold mb-1">{title}</h3>
          {subtitle && (
            <p className="text-sm opacity-90">{subtitle}</p>
          )}
        </div>
      </div>
    </a>
  );
};

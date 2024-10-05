import React from 'react';
import Card from './Card';

const TrendingEvents = () => {
  const cards = [
    {
      title: 'EKITI HACKATHON 2023',
      date: 'Monday, Oct 30, 4 pm',
      link: '#',
      imageSrc: 'https://s3-alpha-sig.figma.com/img/3dc5/f7dc/a132d225d8f349f808cfc8921a32013e?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QwfexcflQbWCuy8qTf~EiC6Mkmjbs9J7TRkUTZsLI0yKKtffpILI8UkOeWYZXs5pRldUqJZe-FRIHwcXTaCc8mmmmx78rU6z-7i--GUYwkExJdMi~DrzPnTzosbSA0zAHqLh7bU7fjbb1i9bFW3ST1nL5BcQmJ89t1Zsyj-FlPN-r~FEx5yvO2251GAjEvLdj1fOuvpF5JVU-~a2Ox2S1S6ZYi6y-OjOXe9YnPv1nue-dIDIdXC~Sx3zukms71PNoQDU67tdWjQqkzaw6FPfb40dAXR5dxjMBsC4Fe~~FhucHHTmTJ1G4W9-Eqkf3EsIJQNnyJmzSJJNal5KpsW4ZQ__'
    },
    {
      title: 'EKITI HACKATHON 2023',
      date: 'Monday, Oct 30, 4 pm',
      link: '#',
      imageSrc: 'https://s3-alpha-sig.figma.com/img/3dc5/f7dc/a132d225d8f349f808cfc8921a32013e?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QwfexcflQbWCuy8qTf~EiC6Mkmjbs9J7TRkUTZsLI0yKKtffpILI8UkOeWYZXs5pRldUqJZe-FRIHwcXTaCc8mmmmx78rU6z-7i--GUYwkExJdMi~DrzPnTzosbSA0zAHqLh7bU7fjbb1i9bFW3ST1nL5BcQmJ89t1Zsyj-FlPN-r~FEx5yvO2251GAjEvLdj1fOuvpF5JVU-~a2Ox2S1S6ZYi6y-OjOXe9YnPv1nue-dIDIdXC~Sx3zukms71PNoQDU67tdWjQqkzaw6FPfb40dAXR5dxjMBsC4Fe~~FhucHHTmTJ1G4W9-Eqkf3EsIJQNnyJmzSJJNal5KpsW4ZQ__'
    },
    {
      title: 'EKITI HACKATHON 2023',
      date: 'Monday, Oct 30, 4 pm',
      link: '#',
      imageSrc: 'https://s3-alpha-sig.figma.com/img/3dc5/f7dc/a132d225d8f349f808cfc8921a32013e?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QwfexcflQbWCuy8qTf~EiC6Mkmjbs9J7TRkUTZsLI0yKKtffpILI8UkOeWYZXs5pRldUqJZe-FRIHwcXTaCc8mmmmx78rU6z-7i--GUYwkExJdMi~DrzPnTzosbSA0zAHqLh7bU7fjbb1i9bFW3ST1nL5BcQmJ89t1Zsyj-FlPN-r~FEx5yvO2251GAjEvLdj1fOuvpF5JVU-~a2Ox2S1S6ZYi6y-OjOXe9YnPv1nue-dIDIdXC~Sx3zukms71PNoQDU67tdWjQqkzaw6FPfb40dAXR5dxjMBsC4Fe~~FhucHHTmTJ1G4W9-Eqkf3EsIJQNnyJmzSJJNal5KpsW4ZQ__'
    },
    {
      title: 'EKITI HACKATHON 2023',
      date: 'Monday, Oct 30, 4 pm',
      link: '#',
      imageSrc: 'https://s3-alpha-sig.figma.com/img/3dc5/f7dc/a132d225d8f349f808cfc8921a32013e?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QwfexcflQbWCuy8qTf~EiC6Mkmjbs9J7TRkUTZsLI0yKKtffpILI8UkOeWYZXs5pRldUqJZe-FRIHwcXTaCc8mmmmx78rU6z-7i--GUYwkExJdMi~DrzPnTzosbSA0zAHqLh7bU7fjbb1i9bFW3ST1nL5BcQmJ89t1Zsyj-FlPN-r~FEx5yvO2251GAjEvLdj1fOuvpF5JVU-~a2Ox2S1S6ZYi6y-OjOXe9YnPv1nue-dIDIdXC~Sx3zukms71PNoQDU67tdWjQqkzaw6FPfb40dAXR5dxjMBsC4Fe~~FhucHHTmTJ1G4W9-Eqkf3EsIJQNnyJmzSJJNal5KpsW4ZQ__'
    },
  ];

  return (
    <div className="flex gap-4 justify-center flex-wrap m-4 bg-white">
      {cards.map((card, index) => (
        <Card
          key={index}
          imageSrc={card.imageSrc}
          title={card.title}
          date={card.date}
          link={card.link}
        />
      ))}
    </div>
  );
};

export default TrendingEvents;

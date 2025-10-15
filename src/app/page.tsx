"use client";
import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Award, Shield } from 'lucide-react';

const assetMap = [
  { "id": "hero-image", "url": "https://images.pexels.com/photos/2827798/pexels-photo-2827798.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Close-up of a woman lighting a cigarette outdoors with a lighter, smoke visible." },
  { "id": "about-image", "url": "https://images.pexels.com/photos/1181715/pexels-photo-1181715.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Two women sitting at a table having a professional discussion in a bright office setting." },
  { "id": "product-image-1", "url": "https://images.pexels.com/photos/16601238/pexels-photo-16601238.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Close-up of a hand reaching for a ZYN nicotine pouch on a rock by the sea." },
  { "id": "product-image-2", "url": "https://images.pexels.com/photos/3975067/pexels-photo-3975067.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Stacks of cigar bundles wrapped in paper, placed on a wooden surface inside a manufacturing facility." },
  { "id": "product-image-3", "url": "https://images.pexels.com/photos/16601238/pexels-photo-16601238.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Close-up of a hand reaching for a ZYN nicotine pouch on a rock by the sea." },
  { "id": "team-member-1", "url": "https://images.pexels.com/photos/3184395/pexels-photo-3184395.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Young professional leading a diverse team in a contemporary office setting." },
  { "id": "team-member-2", "url": "https://images.pexels.com/photos/7691726/pexels-photo-7691726.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "A diverse team of professionals collaborating and discussing work in a modern office setting." }
];

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal brandName="Zyn Snus" />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24 bg-blue-50 text-blue-900">
        <div className="mx-auto px-4 md:px-6">
          <HeroSplit
            title="Welcome to Zyn Snus"
            description="Experience the fresh way to enjoy nicotine."
            imageSrc="https://images.pexels.com/photos/2827798/pexels-photo-2827798.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            buttons={[{ text: "Learn More", href: "about" }]}
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24 bg-blue-50 text-blue-900">
        <div className="mx-auto px-4 md:px-6">
          <SplitAbout
            bulletPoints={[
              { title: "Heritage", description: "Zyn Snus has a long-standing tradition of quality.", icon: Award },
              { title: "Quality", description: "Our products meet the highest industry standards.", icon: Shield },
            ]}
            imageSrc="https://images.pexels.com/photos/1181715/pexels-photo-1181715.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          />
        </div>
      </div>
      <div id="product" data-section="product" className="scroll-mt-24 bg-blue-50 text-blue-900">
        <div className="mx-auto px-4 md:px-6">
          <ProductCardOne
            products={[
              { id: "1", name: "Zyn Mint", price: "$5.99", imageSrc: "https://images.pexels.com/photos/16601238/pexels-photo-16601238.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" },
              { id: "2", name: "Zyn Citrus", price: "$5.99", imageSrc: "https://images.pexels.com/photos/3975067/pexels-photo-3975067.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" },
              { id: "3", name: "Zyn Chill", price: "$5.99", imageSrc: "https://images.pexels.com/photos/16601238/pexels-photo-16601238.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" },
            ]}
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24 bg-blue-50 text-blue-900">
        <div className="mx-auto px-4 md:px-6">
          <ContactSplit
            tag="Get in Touch"
            title="Stay Connected with Zyn"
            description="Join our newsletter for updates."
            imageSrc="https://images.pexels.com/photos/2827798/pexels-photo-2827798.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24 bg-blue-50 text-blue-900">
        <div className="mx-auto px-4 md:px-6">
          <FooterLogoEmphasis
            columns={[{
              items:[
                { label: "About", href: "about" },
                { label: "Products", href: "https://product" },
                { label: "Contact", href: "contact" }
              ]
            }]}
            logoText="Zyn Snus"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
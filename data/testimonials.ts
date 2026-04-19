export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  image: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "Tech Innovations Inc.",
    quote: "Muhammad is an exceptional developer. His attention to detail and ability to solve complex problems made our project a huge success. Highly recommended!",
    image: "/testimonials/person1.jpg",
  },
  {
    id: "2",
    name: "Alex Chen",
    role: "CEO",
    company: "StartUp Hub",
    quote: "Working with Muhammad was a game-changer for our startup. He delivered quality code on time and was always open to feedback. A true professional.",
    image: "/testimonials/person2.jpg",
  },
  {
    id: "3",
    name: "Emma Williams",
    role: "UX Designer",
    company: "Design Studio",
    quote: "Muhammad understands both design and development perfectly. He bridged the gap between our design team and technical requirements flawlessly.",
    image: "/testimonials/person3.jpg",
  },
];

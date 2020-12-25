import { v4 } from 'uuid'
import { FC } from 'react';

const Testimonials: FC<{ testimonials: {
    quote: string,
    author: string,
  }[]}> = ({ testimonials }) => (
  <div>
    {testimonials.map((testimonial) => (
      <article key={v4()} className="message">
        <div className="message-body">
          {testimonial.quote}
          <br />
          <cite> – {testimonial.author}</cite>
        </div>
      </article>
    ))}
  </div>
)



export default Testimonials

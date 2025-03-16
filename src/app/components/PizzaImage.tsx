xml
<project>
  <name>Pizza Ordering App</name>
  <framework>next-on-pages</framework>
  <overview>
    A simple pizza ordering application. Users can view a menu, select items, and submit an order. The frontend is built with Next.js, and the backend is mocked.
  </overview>
</project>

<component>
  <path>src/app/components/PizzaImage.tsx</path>
  <description>
    This component displays a pizza image.

    - Purpose:  To display a visually appealing image of a pizza.
    - Prop Interface:
      - `src`:  A string representing the image source URL.
      - `alt`:  A string providing alternative text for the image.
    - State Management: None.
    - Mock Event Handling: None.
    - Style: Tailwind CSS for basic styling. Ensure the image is responsive and fills its container.
    - Animation: A subtle fade-in animation on mount using Framer Motion.
    - Edge Compatibility: Compatible.
  </description>
</component>
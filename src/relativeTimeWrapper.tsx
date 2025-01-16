export function RelativeTimeWrapper() {
  return (
    <>
      Wrapped as React component <br />
      <relative-time
        datetime="2025-01-01T16:30:00-08:00"
        format="relative"
      ></relative-time>
    </>
  );
}

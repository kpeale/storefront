import Navbar from '../../components/Navbar';

export default function layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Navbar />
      <main className='font-work-sans'>{children}</main>
    </>
  );
}

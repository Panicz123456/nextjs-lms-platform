import { Navbar } from "@/modules/home/ui/components/navbar";

interface Props {
  children: React.ReactNode;
}

const layout = ({ children }: Props) => {
  return (
    <div>
      <Navbar />
			<main className="container mx-auto px-4 md:px-6 lg:px-8">
				{children}
			</main>
    </div>
  );
};

export default layout;

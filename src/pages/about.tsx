import NavBar from "../components/NavBar";

export default function About() {
    return (
        <div>
            <NavBar />
            <main className="flex min-h-screen flex-col items-center justify-center bg-black text-green-500">
                <h1 className="text-4xl mb-4">About Us</h1>
                <p className="text-lg">This is the about us page.</p>
            </main>
        </div>
    );
}
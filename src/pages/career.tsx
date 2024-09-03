import NavBar from "../components/NavBar";

export default function Career() {
    return (
        <div>
            <NavBar />
            <main className="flex min-h-screen flex-col items-center justify-center bg-black text-green-500">
                <h1 className="text-4xl mb-4">Career</h1>
                <p className="text-lg">This is the career page.</p>
            </main>
        </div>
    );
}
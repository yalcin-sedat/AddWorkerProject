import Button from "./Button"
import Card from "./Card";
const ErrorModal = () => {
    return (

        <div className="backdrop-blur-sm bg-white/30 fixed w-screen h-screen top-0">
            <div className="error-modal">
                <Card className="w-[36rem] p-0 z-20">
                    <header className="bg-red-700 p-4 text-white rounded-t-xl ">
                        <h2 className="text-center text-xl">isim alani bos gecilemez</h2>
                    </header>
                    <section className="text-white p-4"> Lütfen Isim giriniz</section>
                    <footer className=" flex justify-end">
                        <Button>OK</Button>
                    </footer>
                </Card>
            </div>
        </div>
    );
};

export default ErrorModal;
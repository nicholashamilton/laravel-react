import { RouterProvider } from 'react-router-dom';
import router from "./router";
import ToastNotifications from "@/components/ToastNotifications";

function App() {
    return (
        <div className="block relative">
            <RouterProvider
                router={router}
            />
            <ToastNotifications />
        </div>
    );
}

export default App;

export function AuthLayout({ size, form, illustration }) {
    return (
        <div className="flex min-h-screen overflow-hidden">
            <div className="
                transition-all duration-500 ease-in-out transform
                flex flex-col
                justify-center
                content-center
                flex-1
                m-auto
                mx-4 md:mx-14 lg:mx-40 xl:mx-60 2xl:mx-16
                py-12
                px-12
                2xl:flex-none 2xl:px-20
                md:rounded-lg
                md:shadow-lg
            ">
                <div className="w-full max-w-2xl mx-auto">
                    {form}
                </div>
            </div>
            <div className="hidden 2xl:flex flex-1 justify-center content-center">
                <div className="w-4/5 m-auto max-w-3xl">
                    {illustration}
                </div>
            </div>
        </div>
    )
}
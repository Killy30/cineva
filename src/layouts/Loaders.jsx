import '../styles/loader.css'

export function LoaderXXL() {
    return (
        <div className="box_loader_xxl">
            <div class="loader_xxl">
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
                <div class="bar4"></div>
                <div class="bar5"></div>
                <div class="bar6"></div>
                <div class="bar7"></div>
                <div class="bar8"></div>
                <div class="bar9"></div>
                <div class="bar10"></div>
                <div class="bar11"></div>
                <div class="bar12"></div>
            </div>
        </div>
    )
}

export function Loader() {
    return (
        <div className="height_display w-100 h-100 d-flex justify-content-center align-items-center">
            <div className="spinner-border text-white" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}


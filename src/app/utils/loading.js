export function loading() {
    return (
        // eslint-disable-next-line react/react-in-jsx-scope
        <div className="d-flex justify-content-center align-items-center m-5">
            {/* eslint-disable-next-line react/react-in-jsx-scope */}
            <strong>Загрузка...</strong>
            {/* eslint-disable-next-line react/react-in-jsx-scope */}
            <div className="spinner-border m-3 text-primary" role="status" aria-hidden="true"></div>
        </div>

    );
}

export const goToHomePage = (navigate) => {
    navigate("/")
}

export const goToDetail = (navigate, name) => {
    navigate(`/detalhes/${encodeURIComponent(name)}`)
}
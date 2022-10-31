export const searchFilmByGenre = async (filter?: string, sortBy?: string) => {
    // debugger
    const response = await fetch(`${process.env.filmAPI}?sortOrder=desc
                                ${filter ? `&searchBy=genre` : ''}
                                ${filter ? `&filter=${filter}` : ''}
                                ${sortBy ? `&sortBy=${sortBy}` : ''}
                                `)
    return await response.json()
}
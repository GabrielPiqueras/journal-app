
// Sin probar, no se si actualmente se puede implementar 
// en la versión actual, lo mismo hay que buscar otra forma.

export const getDocumentsData = (snapshot) => {

    let documents = [];

    snapshot.forEach(doc => {
        documents.push({ id: doc.id, ...doc.data()})
    });

    return documents;
}
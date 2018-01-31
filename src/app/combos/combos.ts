export interface ICombos {
    combos: [
        {
            id: number,
            nome: string,
            atividades: [
                {
                    atividade_nome: string
                }
            ],
            preco: number
        }
    ]
}
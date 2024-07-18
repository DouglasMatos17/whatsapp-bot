export const database = [
    {
        //Mensagem de saudação
        stageStatus: 0,
        stageReturn: null,
        textResponse: {
            positive: 'Bem-vindo ao bot da Pizzaria!\nDigite "1" para ver o menu e fazer um pedido.',
            negative: "Opção inválida, tente novamente!",
        },
        clientResponse: null
    },

    {
        //Menu
        stageStatus: 1,
        stageReturn: null,
        textResponse: {
            positive: {
                1: "Margherita - R$25",
                2: "Pepperoni - R$30",
                3: "Portuguesa - R$28",
                4: "Calabresa - R$27",
                5: "Quatro Queijos - R$32"
            },
            negative: "Opção inválida. Por favor, escolha uma pizza digitando o número correspondente:\n1. Margherita - R$25\n2. Pepperoni - R$30\n3. Portuguesa - R$28\n4. Calabresa - R$27\n5. Quatro Queijos - R$32",
        },
        clientResponse: ['1', '2', '3', '4', '5'],
    },

    {
        //Confirmação do sabor
        stageStatus: 2,
        stageReturn: 1,
        textResponse: {
            positive: `Você escolheu ***********. Para confirmar seu pedido, digite "2". Para cancelar, digite "3". ou "0" para voltar ao menu.`,
            negative: "Opção invalida! Digite uma das opções: \n2. Confirmar o pedido. \n3. Cancelar o seu pedido atual.",
        },
        clientResponse: ['2', '3', '0'],
    },

    {
        //Resposta da confirmação
        stageStatus: 3,
        stageReturn: 1,
        textResponse: {
            positive: `Seu pedido de ************** foi confirmado! Em breve enviaremos uma confirmação.`,
            negative: "Seu pedido foi cancelado.",
        },
    },
]
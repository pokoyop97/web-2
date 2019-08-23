interface Lakes {
    name: string,
    area: number,
    largo: number,
    profundidad: number,
    esFresca: boolean,
    estados: string[],
    congelado?: string[],
    [extraProp: string]: any
}
let primerLago: Lakes = {
    name: 'Oceano caspian',
    largo: 1199,
    profundidad:371000,
    esFresca: false,
    estados: ['kazakhstan', 'Russia', 'Turkmenistan','Azerbaijan','Iran']
}
let segundoLago: Lakes = {
    name: 'Superior',
    largo: 616,
    area: 82100,
    esFresca: true,
    estados: ['Canada','Estados Unidos']
}
let tercerLago: Lakes = {
    name: 'Baikal',
    profundidad:1637,
    largo: 636,
    area: 31500,
    esFresca: true,
    estados: ['Russia'],
    congelado:['Enero','Febrero','Marzo','Abril','Mayo']
}
let cuartoLago: Lakes = {
    name: 'Tanganyika',
    profundidad:1470,
    largo: 676,
    area: 32600,
    esFresca: true,
    estados: ['burundi','tanzania','zambia','congo'],
    congelado: ['prueba'],
    kigoma: ['tanzania'],
    kalemie: ['congo'],
    bujumbura: ['burundi']
}

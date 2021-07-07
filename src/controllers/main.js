//van a venir aca todas las direcciones(about , register,login , etc)
const menu=[
{
    id:1,
    nombrePlato:"Carpaccio fresco",
    descripcion: "Entrada Carpaccio de salmón con cítricos",
    precio:" U$S 65.50",
    imagen:"Carpaccio-de-salmon.jpg"
},
{
    id:2,
    nombrePlato:"Risotto de berenjena",
    descripcion:"Risotto de berenjena y queso de cabra",
    precio:" U$S 47.00",
    imagen:"Risotto-berenjena-queso-cabra.jpg"
},
{
    id:3,
    nombrePlato:"Mousse de arroz",
    descripcion:"Mousse de arroz con leche y aroma de azahar",
    precio:" U$S 27.50",
    imagen:"Mousse-de-arroz-con-leche.jpg"
}
]
module.exports= {
    index:(req,res)=> res.render("index",{
        title:"Pimienta & sal",
        plato:menu,
    }),
    detalleMenu:(req,res)=> res.render("detalleMenu",{
        title:"Home",
        plato: req.params.idDetalle ? menu.filter(element=> element.id == req.params.idDetalle): menu,
        styles:"../css/style.css"
    })
    
}
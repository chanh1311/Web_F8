const Handlebars = require('Handlebars');
module.exports = { 
    sum: (a, b) => a + b,
            sortAble: (field,sort) => {

                // field thì được truyền vào, sort.column là biến nằm trên url
                
                var isSelected = (field === sort.column) && ['asc','desc'].includes(sort.type) 
                ? sort.type : 'default';
                
                var icons = {
                    default: '<i class="bi bi-filter"></i>',
                    asc: '<i class="bi bi-sort-down-alt"></i>',
                    desc: '<i class="bi bi-sort-down"></i>'
                }
                var types = {
                    default: 'asc',
                    asc: 'desc',
                    desc: 'asc'
                }

                var icon = icons[isSelected];
                var type = types[isSelected];

                var href = Handlebars.escapeExpression(`?_sort&column=${field}&type=${type}`);
                const output = `<a href="${href}">
                    ${icon}
                </a>`
                return new Handlebars.SafeString(output);
            }
}
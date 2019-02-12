import { Pipe, PipeTransform } from '@angular/core';
import * as underscore from 'underscore';

@Pipe({
    name: 'movieFilter',
    pure: false
})
export class MovieFilter implements PipeTransform {
    transform(items: any[], filter: any): any {
        if (!items || !filter) {
            return items;
        }
        // filter items array, items which match and return true will be
        // kept, false will be filtered out
        return items.filter(item => {
            if ( underscore.isEmpty(filter.searchTerm)){
                return true;
            }
            return ((item.Title.toLowerCase()).includes(filter.searchTerm.toLowerCase()) || ( !underscore.isEmpty(item.Year) &&
             (item.Year.toLowerCase()).includes(filter.searchTerm.toLowerCase())));
        });
    }
}
// src/pages/controller.ts
import { JsonController, Get, Param, Put, Body } from 'routing-controllers'
import pagesById, { Page } from './data'
type PageList = { pages: Page[] }
@JsonController()
export default class PageController {
    @Get('/pages')
    allPages(): PageList {
        return {
            pages: Object.values(pagesById)
    }
}
@Put('/pages/:id')
updatePage(
    @Param('id') id: number,
    @Body() body: Partial<Page>
): Page {
    console.log(`Incoming PUT body param:`, body)
    return pagesById[id]
}
}
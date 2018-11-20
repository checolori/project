// src/pages/controller.ts
import { JsonController, Get } from 'routing-controllers'
import pagesById, { Page } from './data'
type PageList = { pages: Page[] }
@JsonController()
export default class PageController {
    @Get('/pages')
    allPages(): PageList {
        return {
            pages: Object.values(pagesById)
    }
    // ..
}
}
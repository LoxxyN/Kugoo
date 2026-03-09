import { Context } from 'hono'
import { ProductModel } from '../models/ProductModel'

export const productController = {
	//Получить все товары из базы
	getAll: async (c: Context) => {
		try {
			const products = await ProductModel.find()
			return c.json({ success: true, data: products })
		} catch (error) {
			console.error('Loading error', error)
			return c.json({ error: 'Loading error' }, 500)
		}
	},

	//Получить конкретный товар
	getOne: async (c: Context) => {
		try {
			const id = c.req.param('id')
			const product = await ProductModel.findById(id)

			if (!product) {
				return c.json({ error: 'Product not find' }, 404)
			}

			return c.json({ success: true, data: product })
		} catch (error) {
			console.error('Loading error', error)
			return c.json({ error: 'Loading error' }, 500)
		}
	},

	//Создать новый товар
	create: async (c: Context) => {
		try {
			const body = await c.req.json()
			const product = new ProductModel(body)
			await product.save()

			return c.json({ success: true, data: product }, 201)
		} catch (error) {
			console.error('Loading error', error)
			return c.json({ error: 'Ошибка создания' }, 500)
		}
	},

	//Обновить данные товара
	update: async (c: Context) => {
		try {
			const id = c.req.param('id')
			const body = await c.req.json()
			const product = await ProductModel.findByIdAndUpdate(id, body, {
				new: true,
			})

			if (!product) {
				return c.json({ error: 'Product not find' }, 404)
			}

			return c.json({ success: true, data: product })
		} catch (error) {
			console.error('Loading error', error)
			return c.json({ error: 'Ошибка обновления' }, 500)
		}
	},
	//Удалить товар
	delete: async (c: Context) => {
		try {
			const id = c.req.param('id')
			const product = await ProductModel.findByIdAndDelete(id)

			if (!product) {
				return c.json({ error: 'Product not find' }, 404)
			}

			return c.json({ success: true, message: 'Товар удален' })
		} catch (error) {
			console.error('Loading error', error)
			return c.json({ error: 'Ошибка удаления' }, 500)
		}
	},
}

const express = require('express');
const router = express.Router();

const coursesController = require('../app/controllers/CourseController')
router.post('/store', coursesController.store)
router.post('/handle-form-action', coursesController.handleFormAction)
router.get('/create', coursesController.create)
router.get('/:slug', coursesController.show)
router.get('/:id/edit', coursesController.edit)
router.put('/:id', coursesController.update)
router.delete('/:id', coursesController.delete)
router.delete('/:id/force', coursesController.forceDelete)
router.patch('/:id/restore', coursesController.restore)



module.exports = router

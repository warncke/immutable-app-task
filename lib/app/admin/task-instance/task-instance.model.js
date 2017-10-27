'use strict'

module.exports = {
    columns: {
        taskId: {
            index: true,
            null: false,
            type: 'id',
        },
    },
    name: 'taskInstance',
    relations: {
        task: {},
    },
}
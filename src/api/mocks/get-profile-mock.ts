import { http, HttpResponse } from 'msw'

import { GetProfileResponse } from '../get-profile'

export const getProfileMock = http.get<never, never, GetProfileResponse>(
  '/me',
  () => {
    return HttpResponse.json({
      id: 'customer-id',
      name: 'John Joe',
      email: 'johnjoe@example.com',
      phone: '55555555555',
      createdAt: new Date(),
      role: 'manager',
      updatedAt: null,
    })
  },
)

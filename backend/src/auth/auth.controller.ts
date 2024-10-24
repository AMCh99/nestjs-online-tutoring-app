
import { Body, Controller, Post, HttpCode, HttpStatus, UseGuards, Get, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiBearerAuth, ApiBody, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from './auth.guard';
import { Public } from './decorators/auth.public.decorator'

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiOkResponse({
    description: 'signIn',
  })
  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        userName: { type: 'string' },
        password: { type: 'string' },
      },
    },
  })
  signIn(@Body() signInDto: Record<string, any>) {    
    return this.authService.signIn(signInDto.id, signInDto.password);
  }

  @ApiBearerAuth()
  @ApiOkResponse({
    description: 'Get the user profile.',
  })
  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}

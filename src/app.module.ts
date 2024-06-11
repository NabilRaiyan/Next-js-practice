import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './admin/admin.module';
import { DoctorModule } from './doctor/doctor.module';

@Module({
  imports: [AdminModule, DoctorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
